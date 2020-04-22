const avgNum = () => {
    let array = [1, 2, 3];
    let total = 0;
    // calculate an average by adding all the elements and then dividing by the number of elements.
    for(var i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    console.log(avg);
    }
    avgNum();