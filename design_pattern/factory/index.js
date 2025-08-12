var _a = require("./logistic"), LogisticFactory = _a.LogisticFactory, LogisticType = _a.LogisticType;
var factory = new LogisticFactory();
var airLogistic = factory.getLogistic(LogisticType.AIR);
console.log(LogisticType.AIR);
airLogistic.drive();
