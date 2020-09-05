This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assignment's 2 Question - In a given NxM array find the sum of every row and every column. And store the result in a single dimension array in ascending order. 


```let arr = [[1,2,3,4],[6,7,8,9],[0,1,2,3],[4,7,5,6]]

// sumofMatrix will calculate sum of Row and Column matrix
function sumofMatrix(arr){
    let sumA=0;
    let sumB = 0;
    let rowtotalvalues = []
    let columntotlavalues = []
    let total = []
    
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr.length; j++){
            // Sum of Rows
            sumA = sumA + arr[i][j]
            //  Sum of Columns
            sumB = sumB + arr[j][i]             
        }
        // Push sum of Rows to rowtotalvalues
            rowtotalvalues.push(sumA)
        // Push sum of Columns to columntotlavalues
            columntotlavalues.push(sumB)
            
    }
            // Sorting two arrays into single array in ascending order
            total = [...rowtotalvalues, ...columntotlavalues].sort()
            console.log(total)
}

sumofMatrix(arr)```

