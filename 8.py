def next_greater_right(arr):
    res = [-1 for _ in arr]
    stack = []
    for i, num in enumerate(arr):
        while stack and arr[stack[-1]] <= num: # <= instead of < since tree of equal height is considered "greater"
            index = stack.pop()
            res[index] = num
        stack.append(i)
    return res
            
def next_greater_left(arr):
    res = [-1 for _ in arr]
    stack = []
    for i, num in reversed(list(enumerate(arr))):
        while stack and arr[stack[-1]] <= num: # <= instead of < since tree of equal height is considered "greater"
            index = stack.pop()
            res[index] = num
        stack.append(i)
    return res

def transpose(mat):
    w = len(mat[0])
    h = len(mat)
    return [[mat[i][j] for i in range(h)] for j in range(w)]

def part1():
    with open('8_input.txt') as f:
        # turn lines of input into 2d array of integer heights
        forest = list(map(lambda l: l.strip(), f.readlines()))
        forest = [[int(c) for c in row] for row in forest]
        transposed_forest = transpose(forest)

        blocking_trees_right = [next_greater_right(row) for row in forest]
        blocking_trees_left = [next_greater_left(row) for row in forest]
        blocking_trees_above = transpose([next_greater_left(row) for row in transposed_forest])
        blocking_trees_below = transpose([next_greater_right(row) for row in transposed_forest])

        visible_trees = {}
        for i, row in enumerate(forest):
            for j, col in enumerate(forest[i]):
                if (blocking_trees_left[i][j] == -1 
                    or blocking_trees_right[i][j] == -1 
                    or blocking_trees_above[i][j] == -1 
                    or blocking_trees_below[i][j] == -1
                    ):
                    visible_trees[f'{i},{j}'] = forest[i][j]

        print(len(visible_trees))

def part2():
    with open('8_input.txt') as f:
        forest = list(map(lambda l: l.strip(), f.readlines()))
        forest = [[int(c) for c in row] for row in forest]
        transpose_forest = transpose(forest)
        
        blocking_trees_right = [next_greater_right(row) for row in forest]
        print(blocking_trees_right)



# part1()
part2()