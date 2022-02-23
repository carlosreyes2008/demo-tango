const Sequencer = async(index) => {
    var result = {
        sequence: [0,1],
        infinity: false
    }

    for(var i = 0; i < index & index > 1; i++){
        var iteration = result.sequence[i] + result.sequence[i + 1];
        result.sequence.push(iteration);

        if(!isFinite(iteration)){
            result.infinity = true;
            break;
        }
    }

    return result;
}

exports.Number = async(req, res) => {
    const { fIndex } = req.params;

    if(isNaN(fIndex)){
        res.status(400).json({
            success : false,
            message: 'Input is not a number',
        });
    }

    var result = await Sequencer(fIndex);

    res.json({
        success: true,
        number: result.infinity ? 'Infinity' : result.sequence[fIndex],
    });
}