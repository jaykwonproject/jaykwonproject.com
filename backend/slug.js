const mongoose = require('mongoose');
const slugify = require('slugify');
const Post = require('./models/modelPost'); // Adjust the path as necessary

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function updateSlugs() {
  const posts = await Post.find({ slug: null });

  for (let post of posts) {
    let baseSlug = slugify(post.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;
    
    // Ensure the slug is unique
    while (await Post.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    post.slug = slug;
    await post.save();
  }

  console.log('Slugs updated');
  mongoose.disconnect();
}

updateSlugs().catch(err => {
  console.error('Error updating slugs:', err);
  mongoose.disconnect();
});
