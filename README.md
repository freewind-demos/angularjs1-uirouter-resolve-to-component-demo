AngularJS1 "@uirouter" Resolve to Component Demo
================================================

在uirouter的state中，如何从resolve向component传值。

注意：在component的controller中，对于bindings从外面拿到的值，在controller中并不能第一时间直接拿到，
在下一个轮回中可以拿到。

注意这段代码：

```
controller: function () {
  console.log('userName', this.userName)
  setTimeout(() => {
    console.log('userName', this.userName)
  }, 0);
}
```

```
npm install
npm run demo
```
