def distanceCalculator(head, tail):
    return abs(head[0] - tail[0]) + abs(head[1] - tail[1])


with open("9.txt") as f:
    lines = f.readlines()
    coordinatesSet = {(0, 0)}
    headPosition = (0, 0)
    tailPosition = (0, 0)
    for line in lines:
        direction, steps = line.split(" ")[0], int(line.split(" ")[1])
        for _ in range(steps):
            if direction == "R":
                headPosition = (headPosition[0] + 1, headPosition[1])
                distance = distanceCalculator(headPosition, tailPosition)
                if distance in [0, 1]:
                    continue
                elif distance == 2:
                    tailPosition = (tailPosition[0] + 1, tailPosition[1])
                elif distance == 3:
                    tailPosition = (tailPosition[0] + 1, tailPosition[1]+1) if tailPosition[1] < headPosition[1] else (
                        tailPosition[0] + 1, tailPosition[1]-1)
            elif direction == "L":
                headPosition = (headPosition[0] - 1, headPosition[1])
                distance = distanceCalculator(headPosition, tailPosition)
                if distance in [0, 1]:
                    continue
                elif distance == 2:
                    tailPosition = (tailPosition[0] - 1, tailPosition[1])
                elif distance == 3:
                    tailPosition = (tailPosition[0] - 1, tailPosition[1]+1) if tailPosition[1] < headPosition[1] else (
                        tailPosition[0] - 1, tailPosition[1]-1)
            elif direction == "U":
                headPosition = (headPosition[0], headPosition[1] + 1)
                distance = distanceCalculator(headPosition, tailPosition)
                if distance in [0, 1]:
                    continue
                elif distance == 2:
                    tailPosition = (tailPosition[0], tailPosition[1] + 1)
                elif distance == 3:
                    tailPosition = (tailPosition[0] + 1, tailPosition[1]+1) if tailPosition[0] < headPosition[0] else (
                        tailPosition[0] - 1, tailPosition[1]+1)
            elif direction == "D":
                headPosition = (headPosition[0], headPosition[1] - 1)
                distance = distanceCalculator(headPosition, tailPosition)
                if distance in [0, 1]:
                    continue
                elif distance == 2:
                    tailPosition = (tailPosition[0], tailPosition[1] - 1)
                elif distance == 3:
                    tailPosition = (tailPosition[0] + 1, tailPosition[1]-1) if tailPosition[0] < headPosition[0] else (
                        tailPosition[0] - 1, tailPosition[1]-1)
            coordinatesSet.add(tailPosition)
    print(len(coordinatesSet))


# print(distanceCalculator((0, 0), (1, 0)))  # 1
# print(distanceCalculator((0, 0), (1, 1)))  # 2
# print(distanceCalculator((3, 0), (4, 2)))  # 3
