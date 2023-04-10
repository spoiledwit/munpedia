const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  postIds: { type: String, required: true }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;