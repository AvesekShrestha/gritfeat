enum LogisticType {
    SEA = "sea",
    AIR = "air",
    LAND = "land"
}

interface IVehicle {
    drive(): void;
}

class Ship implements IVehicle {
    drive(): void {
        console.log("Sailing Ship");
    }
}

class Plane implements IVehicle {
    drive(): void {
        console.log("Flying Plane");
    }
}

class Bus implements IVehicle {
    drive(): void {
        console.log("Driving Truck");
    }
}

class LogisticFactory {

    private logisticMap: Record<LogisticType, new () => IVehicle> = {

        [LogisticType.AIR]: Plane,
        [LogisticType.SEA]: Ship,
        [LogisticType.LAND]: Bus

    }

    public getLogistic(logisticType: LogisticType): IVehicle {
        const logisticClass = this.logisticMap[logisticType]

        if (!logisticClass)
            throw new Error(`${logisticType} Logistics not available for the moment`);

        return new logisticClass();
    }
}


module.exports = { LogisticFactory, LogisticType }

