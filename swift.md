## structのinitを自分で定義すると、プロパティを引数で全部指定するinitが使えなくなる件
- プロパティを引数で全部指定するinit "memberwize initilizer" と呼ばれるもの
- カスタムのinitを定義すると、memberwize initilizerが自動生成されなくなる
- カスタムのinitをextensionで定義すると、memberwize initilizerが自動生成される
- 参考：[\[Swift\] struct の initializer おさらい \| SmallDeskSoftware](https://software.small-desk.com/development/2022/04/19/swift-explain-struct-initializer/)