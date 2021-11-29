    function adjacentTrees(arr, i, j, ROW, COL)
    {
           if (i < 0 || j < 0 || i > (ROW - 1) || j > (COL - 1) || arr[i][j] != 1)
        {
            return;
        }
  
        if (arr[i][j] == 1)
        {
            arr[i][j] = 0;
            adjacentTrees(arr, i + 1, j, ROW, COL);     //right side 
            adjacentTrees(arr, i - 1, j, ROW, COL);     //left side 
            adjacentTrees(arr, i, j + 1, ROW, COL);     //upward side 
            adjacentTrees(arr, i, j - 1, ROW, COL);     //downward side 
            adjacentTrees(arr, i + 1, j + 1, ROW, COL); //upward-right side 
            adjacentTrees(arr, i - 1, j - 1, ROW, COL); //downward-left side 
            adjacentTrees(arr, i + 1, j - 1, ROW, COL); //downward-right side 
            adjacentTrees(arr, i - 1, j + 1, ROW, COL); //upward-left side 
        }
    }
  
   function countForests(arr) {
 
        let ROW = arr.length;
        let COL = arr[0].length;
        let count = 0;
        for (let i = 0; i < ROW; i++)
        {
            for (let j = 0; j < COL; j++)
            {
                if (arr[i][j] == 1)
                {
                    arr[i][j] = 0;
                    count++;
                    adjacentTrees(arr, i + 1, j, ROW, COL);     //right side 
                    adjacentTrees(arr, i - 1, j, ROW, COL);     //left side 
                    adjacentTrees(arr, i, j + 1, ROW, COL);     //upward side 
                    adjacentTrees(arr, i, j - 1, ROW, COL);     //downward side 
                    adjacentTrees(arr, i + 1, j + 1, ROW, COL); //upward-right side 
                    adjacentTrees(arr, i - 1, j - 1, ROW, COL); //downward-left side 
                    adjacentTrees(arr, i + 1, j - 1, ROW, COL); //downward-right side 
                    adjacentTrees(arr, i - 1, j + 1, ROW, COL); //upward-left side 
                }
            }
        }
        return count;
    }
      
const example1 = [
	[0, 0, 1, 1, 0, 0],
	[0, 1, 1, 1, 0, 0],
	[0, 1, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 1],
	[1, 0, 0, 1, 1, 1],
];


   
const result = countForests(example1);

console.log(result);   