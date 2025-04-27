# QuickTime Player
## 3倍速で再生する方法
QuickTime PlayerのUIからは0.5x、1.0x、1.25x、1.5x、2.0xしか選べないが、AppleScriptを使用することでその他の再生速度を設定することが可能である。
3倍速に設定するスクリプト例を次に示す。
ただし、一時停止ボタン／再生ボタンを押すと1倍速にリセットされてしまうため、再生を再開する際には都度このスクリプトを実行する必要がある。

```applescript
tell application "QuickTime Player"
	set rate of document 1 to 3
end tell
```
