const mongoose = require('mongoose');
const slugify = require('slugify');

const postSchema = new mongoose.Schema({
  genre: { type: String },
  link: { type: String },
  title: { type: String },
  description: { type: String },
  date: { type: String },
  slug: {
    type: String,
    unique: true,
  },
}, { strict: false });

postSchema.index({ slug: 1 }, { unique: true });

postSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('title')) {
    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    // Check if the slug already exists and generate a unique one if it does
    while (await mongoose.models.Post.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    this.slug = slug;
  }
  next();
});

const postModel = mongoose.model('Post', postSchema);
module.exports = postModel;
