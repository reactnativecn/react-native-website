import CodeBlock from '@theme/CodeBlock';
import {getCurrentVersion} from '@site/src/getCurrentVersion';

# 使用 Codegen

本指南将介绍如何：

- 配置 **Codegen**。
- 为每个平台手动调用它。

此外还会说明生成出来的代码内容。

## 前提条件

即使你要手动调用 **Codegen**，也始终需要一个 React Native 应用，才能正确生成代码。

**Codegen** 过程与应用构建紧密耦合，相关脚本位于 `react-native` NPM 包中。

为了本指南的说明，我们先按如下方式使用 React Native CLI 创建一个项目：

<CodeBlock language="bash" title="shell">
{`npx @react-native-community/cli@latest init SampleApp --version ${getCurrentVersion()}`}
</CodeBlock>

**Codegen** 用于为你的自定义模块或组件生成胶水代码（glue-code）。关于如何创建它们的更多细节，请参阅 Turbo Native Modules 和 Fabric Native Components 的相关指南。

<!-- TODO: add links -->

## 配置 **Codegen**

你可以通过修改应用的 `package.json` 文件来配置 **Codegen**。**Codegen** 由一个名为 `codegenConfig` 的自定义字段控制。

```json title="package.json"
  "codegenConfig": {
    "name": "<SpecName>",
    "type": "<types>",
    "jsSrcsDir": "<source_dir>",
    "android": {
      "javaPackageName": "<java.package.name>"
    },
    "ios": {
      "modules": {
        "TestModule": {
          "className": "<iOS-class-implementing-the-RCTModuleProvider-protocol>",
          "unstableRequiresMainQueueSetup": false,
          "conformsToProtocols": ["RCTImageURLLoader", "RCTURLRequestHandler", "RCTImageDataDecoder"],
        }
      },
      "components": {
        "TestComponent": {
          "className": "<iOS-class-implementing-the-component>"
        }
      }
    }
  },
```

你可以把这段配置加到应用中，并按需自定义各个字段：

- `name:` codegen 配置的名称。它会影响 codegen 的输出内容：包括文件名和生成的代码。
- `type:`
  - `modules:` 只为模块生成代码。
  - `components:` 只为组件生成代码。
  - `all`: 为所有内容生成代码。
- `jsSrcsDir`: 存放所有 spec 的根目录。
- `android`: Android 端的 codegen 配置（全部可选）：
  - `.javaPackageName`: 配置 Android Java codegen 输出的包名。
- `ios`: iOS 端的 codegen 配置（全部可选）：
  - `.modules[moduleName]:`
    - `.className`: 该模块的 ObjC 类。或者，如果它是一个 [C++-only module](/docs/next/the-new-architecture/pure-cxx-modules)，则为其 `RCTModuleProvider` 类。
    - `.unstableRequiresMainQueueSetup`: 在运行任何 JavaScript 之前，于 UI Thread 上初始化此模块。
    - `.conformsToProtocols`: 标注该模块实现了以下哪些协议：[`RCTImageURLLoader`](https://github.com/facebook/react-native/blob/00d5caee9921b6c10be8f7d5b3903c6afe8dbefa/packages/react-native/Libraries/Image/RCTImageURLLoader.h#L26-L81)、[`RCTURLRequestHandler`](https://github.com/facebook/react-native/blob/00d5caee9921b6c10be8f7d5b3903c6afe8dbefa/packages/react-native/React/Base/RCTURLRequestHandler.h#L11-L52)、[`RCTImageDataDecoder`](https://github.com/facebook/react-native/blob/00d5caee9921b6c10be8f7d5b3903c6afe8dbefa/packages/react-native/Libraries/Image/RCTImageDataDecoder.h#L15-L53)。
  - `.components[componentName]`:
    - `.className`: 该组件的 ObjC 类（例如：`TextInput` -> `RCTTextInput`）。

当 **Codegen** 运行时，它会在应用的所有依赖中查找符合特定约定的 JS 文件，并生成所需代码：

- Turbo Native Modules 要求 spec 文件名以 `Native` 为前缀。例如，`NativeLocalStorage.ts` 是合法的 spec 文件名。
- Native Fabric Components 要求 spec 文件名以 `NativeComponent` 为后缀。例如，`WebViewNativeComponent.ts` 是合法的 spec 文件名。

## 运行 **Codegen**

本指南后续部分假设你的项目中已经设置好了 Native Turbo Module、Native Fabric Component，或者两者都有。同时我们也假设你已经在 `package.json` 指定的 `jsSrcsDir` 中准备好了合法的 spec 文件。

### Android

Android 的 **Codegen** 与 React Native Gradle Plugin（RNGP）集成在一起。RNGP 包含了一个可调用的任务，它会读取 `package.json` 文件中定义的配置并执行 **Codegen**。要运行这个 Gradle 任务，请先进入项目的 `android` 文件夹，然后执行：

```bash
./gradlew generateCodegenArtifactsFromSchema
```

这个任务会对应用引入的所有项目（应用本身以及所有与之链接的 node modules）执行 `generateCodegenArtifactsFromSchema` 命令。生成的代码会写入对应的 `node_modules/<dependency>` 目录。例如，如果你有一个 Fabric Native Component，它所在的 Node module 名为 `my-fabric-component`，那么生成代码位于 `SampleApp/node_modules/my-fabric-component/android/build/generated/source/codegen` 路径下。对于应用本身，代码会生成在 `android/app/build/generated/source/codegen` 文件夹中。

#### 生成的代码

运行上面的 Gradle 命令后，你会在 `SampleApp/android/app/build` 文件夹中看到 codegen 生成的代码。结构大致如下：

```
build
└── generated
    └── source
        └── codegen
            ├── java
            │   └── com
            │       ├── facebook
            │       │   └── react
            │       │       └── viewmanagers
            │       │           ├── <nativeComponent>ManagerDelegate.java
            │       │           └── <nativeComponent>ManagerInterface.java
            │       └── sampleapp
            │           └── NativeLocalStorageSpec.java
            ├── jni
            │   ├── <codegenConfig.name>-generated.cpp
            │   ├── <codegenConfig.name>.h
            │   ├── CMakeLists.txt
            │   └── react
            │       └── renderer
            │           └── components
            │               └── <codegenConfig.name>
            │                   ├── <codegenConfig.name>JSI-generated.cpp
            │                   ├── <codegenConfig.name>.h
            │                   ├── ComponentDescriptors.cpp
            │                   ├── ComponentDescriptors.h
            │                   ├── EventEmitters.cpp
            │                   ├── EventEmitters.h
            │                   ├── Props.cpp
            │                   ├── Props.h
            │                   ├── ShadowNodes.cpp
            │                   ├── ShadowNodes.h
            │                   ├── States.cpp
            │                   └── States.h
            └── schema.json
```

生成的代码分为两个文件夹：

- `java`：包含平台相关代码。
- `jni`：包含让 JS 与 Java 正确交互所需的 C++ 代码。

在 `java` 文件夹中，你可以在 `com/facebook/viewmanagers` 子文件夹中找到 Fabric Native Component 生成的代码。

- `<nativeComponent>ManagerDelegate.java` 包含 `ViewManager` 可调用到自定义 Native Component 的方法。
- `<nativeComponent>ManagerInterface.java` 包含 `ViewManager` 的接口定义。

而在名称由 `codegenConfig.android.javaPackageName` 指定的文件夹中，你可以找到 Turbo Native Module 需要实现的抽象类，以完成它的功能。

最后，在 `jni` 文件夹中，包含了把 JS 连接到 Android 所需的全部样板代码。

- `<codegenConfig.name>.h`：包含自定义 C++ Turbo Native Modules 的接口。
- `<codegenConfig.name>-generated.cpp`：包含自定义 C++ Turbo Native Modules 的胶水代码。
- `react/renderer/components/<codegenConfig.name>`：该文件夹包含自定义组件所需的全部胶水代码。

这里展示的结构是使用 `codegenConfig.type` 字段值 `all` 生成的。如果你使用 `modules`，则不会看到 `react/renderer/components/` 文件夹；如果你使用 `components`，则不会看到其他那些文件。

### iOS

iOS 的 **Codegen** 依赖于一些在构建过程中调用的 Node 脚本。这些脚本位于 `SampleApp/node_modules/react-native/scripts/` 文件夹中。

主要脚本是 `generate-codegen-artifacts.js`。要调用它，你可以在应用根目录运行下面的命令：

```bash
node node_modules/react-native/scripts/generate-codegen-artifacts.js

Usage: generate-codegen-artifacts.js -p [path to app] -t [target platform] -o [output path]

Options:
      --help            Show help                                      [boolean]
      --version         Show version number                            [boolean]
  -p, --path            Path to the React Native project root.        [required]
  -t, --targetPlatform  Target platform. Supported values: "android", "ios",
                        "all".                                        [required]
  -o, --outputPath      Path where generated artifacts will be output to.
```

其中：

- `--path` 是应用根目录的路径。
- `--outputPath` 是 **Codegen** 写入生成文件的目标路径。
- `--targetPlatform` 是你希望为之生成代码的平台。

#### 生成的代码

带着下面这些参数运行脚本：

```shell
node node_modules/react-native/scripts/generate-codegen-artifacts.js \
    --path . \
    --outputPath ios/ \
    --targetPlatform ios
```

会在 `ios/build` 文件夹中生成这些文件：

```
build
└── generated
    └── ios
        ├── <codegenConfig.name>
        │   ├── <codegenConfig.name>-generated.mm
        │   └── <codegenConfig.name>.h
        ├── <codegenConfig.name>JSI-generated.cpp
        ├── <codegenConfig.name>JSI.h
        ├── FBReactNativeSpec
        │   ├── FBReactNativeSpec-generated.mm
        │   └── FBReactNativeSpec.h
        ├── FBReactNativeSpecJSI-generated.cpp
        ├── FBReactNativeSpecJSI.h
        ├── RCTModulesConformingToProtocolsProvider.h
        ├── RCTModulesConformingToProtocolsProvider.mm
        └── react
            └── renderer
                └── components
                    └── <codegenConfig.name>
                        ├── ComponentDescriptors.cpp
                        ├── ComponentDescriptors.h
                        ├── EventEmitters.cpp
                        ├── EventEmitters.h
                        ├── Props.cpp
                        ├── Props.h
                        ├── RCTComponentViewHelpers.h
                        ├── ShadowNodes.cpp
                        ├── ShadowNodes.h
                        ├── States.cpp
                        └── States.h
```

这些生成文件中，一部分会被 React Native Core 使用。除此之外，还有一组文件会带有你在 package.json 的 `codegenConfig.name` 字段中指定的名称。

- `<codegenConfig.name>/<codegenConfig.name>.h`：包含自定义 iOS Turbo Native Modules 的接口。
- `<codegenConfig.name>/<codegenConfig.name>-generated.mm`：包含自定义 iOS Turbo Native Modules 的胶水代码。
- `<codegenConfig.name>JSI.h`：包含自定义 C++ Turbo Native Modules 的接口。
- `<codegenConfig.name>JSI-generated.h`：包含自定义 C++ Turbo Native Modules 的胶水代码。
- `react/renderer/components/<codegenConfig.name>`：该文件夹包含自定义组件所需的全部胶水代码。

这里展示的结构是使用 `codegenConfig.type` 字段值 `all` 生成的。如果你使用 `modules`，则不会看到 `react/renderer/components/` 文件夹；如果你使用 `components`，则不会看到其他那些文件。
