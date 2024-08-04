const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
    try {
        const { title, description} = req.body;
        const response = await Todo.create({ title, description,});
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry created successfully'
        });
    } catch (e) {
        console.log('There is an error');
        console.error(e);
        res.status(400).json({
            success: false,
            data: 'There is an error in the internal server',
            message: e.message
        });
    }
};

