import React, { useState, useEffect } from "react";

type DiskSize = "xl" | "lg" | "md" | "sm";

interface IRod {
  id: number;
}

interface IDisk {
  id: number;
  size: DiskSize;
}

export default function App() {
  const sizeMap = {
    sm: "w-16 h-4",
    md: "w-24 h-6",
    lg: "w-32 h-8",
    xl: "w-40 h-10",
  };

  const [disksState, setDisksState] = useState<{ [key: number]: IDisk[] }>({
    1: [
      { id: 1, size: "sm" },
      { id: 2, size: "md" },
      { id: 3, size: "lg" },
      { id: 4, size: "xl" },
    ],
    2: [],
    3: [],
  });

  const [rods] = useState<IRod[]>([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    diskId: number,
    sourceRodId: number
  ) => {
    e.dataTransfer.setData("diskId", diskId.toString());
    e.dataTransfer.setData("sourceRodId", sourceRodId.toString());
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetRodId: number
  ) => {
    e.preventDefault();

    const diskId = parseInt(e.dataTransfer.getData("diskId"));
    const sourceRodId = parseInt(e.dataTransfer.getData("sourceRodId"));

    if (sourceRodId === targetRodId) return;

    const sourceRod = [...disksState[sourceRodId]];
    const targetRod = [...disksState[targetRodId]];

    const diskIndex = sourceRod.findIndex((disk) => disk.id === diskId);
    if (diskIndex === -1) return;

    const disk = sourceRod[diskIndex];
    const topDisk = targetRod[targetRod.length - 1];

    if (topDisk && disk.id > topDisk.id) {
      alert("Cannot place bigger disk on smaller disk!");
      return;
    }

    sourceRod.splice(diskIndex, 1);
    targetRod.unshift(disk);

    setDisksState({
      ...disksState,
      [sourceRodId]: sourceRod,
      [targetRodId]: targetRod,
    });
  };

  useEffect(() => {
    const lastRod = disksState[3];
    const correctOrder = lastRod.map((d) => d.id).join(",");
    if (lastRod.length === 4 && correctOrder === "1,2,3,4") {
      setTimeout(() => {
        alert("🎉 Congrats! You solved the Tower of Hanoi!");
        setDisksState({
          1: [
            { id: 1, size: "sm" },
            { id: 2, size: "md" },
            { id: 3, size: "lg" },
            { id: 4, size: "xl" },
          ],
          2: [],
          3: [],
        });
      }, 100);
    }
  }, [disksState]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-purple-200 via-blue-100 to-white">
      <div className="flex flex-row gap-10">
        {rods.map((rod) => (
          <div
            key={rod.id}
            className="flex flex-col justify-end items-center gap-2 relative bg-transparent min-h-[250px] w-[200px]"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, rod.id)}
          >
            {disksState[rod.id].map((disk) => (
              <div
                key={disk.id}
                className={`${sizeMap[disk.size]} bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 text-white rounded-full shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105`}
                draggable
                onDragStart={(e) => handleDragStart(e, disk.id, rod.id)}
              ></div>
            ))}
            <div className="absolute bottom-0 w-4 h-full bg-gray-700 rounded-full shadow-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
