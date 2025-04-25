## structのinitを自分で定義すると、プロパティを引数で全部指定するinitが使えなくなる件
- プロパティを引数で全部指定するinit "memberwize initilizer" と呼ばれるもの
- カスタムのinitを定義すると、memberwize initilizerが自動生成されなくなる
- カスタムのinitをextensionで定義すると、memberwize initilizerが自動生成される
- 参考：[\[Swift\] struct の initializer おさらい \| SmallDeskSoftware](https://software.small-desk.com/development/2022/04/19/swift-explain-struct-initializer/)

## Swiftでもif式、switch式が使えるようになっている
- Kotlinでお馴染みのif式とwhen式をSwiftでも使えたら良いのにと思っていたら、知らないうちに使えるようになっていた
- Swift 5.9で導入されたので、Xcodeだと15.0（2023/09/18リリース）から使えるようになっていた
- 用語：`if expression`、`switch expression`
- 参考：
    - [swift\-evolution/proposals/0380\-if\-switch\-expressions\.md at main · swiftlang/swift\-evolution](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0380-if-switch-expressions.md)
    - [Control Flow \| Documentation](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/)
    - [if and switch expressions – available from Swift 5\.9](https://www.hackingwithswift.com/swift/5.9/if-switch-expressions)
