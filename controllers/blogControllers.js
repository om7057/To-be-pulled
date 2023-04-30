const createBlog = async (req, res) => {
    res.send('Blog Created!');  
}

const deleteBlog = async (req, res) => {
    res.send('Blog Deleted!');
}

const updateBlog = async (req, res) => {
    res.send('Blog Updated!');
}

const getAllBlog = async (req, res) => {
    res.send('All Blogs');
}

const getBlog = async (req, res) => {
    res.send('Single Blog');
}

module.exports = { createBlog, updateBlog, deleteBlog, getAllBlog, getBlog };