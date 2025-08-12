const { LogisticFactory, LogisticType } = require("./logistic")

const factory = new LogisticFactory()

const airLogistic = factory.getLogistic(LogisticType.AIR);
console.log(LogisticType.AIR)
airLogistic.drive();

