const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// Creates a relationship between User and BlogPost model, with the User having a "has many" relationship with BlogPost model.
User.hasMany(BlogPost, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Creates a relationship between BlogPost and User model, with a "belongs to" relationship of the BlogPost to the User.
BlogPost.belongsTo(User, { 
  foreignKey: 'userId' 
});

// Creates a relationship between BlogPost and Comment model, with BlogPost having a "has many" relationship with the Comment model.
BlogPost.hasMany(Comment, {
  foreignKey: 'postId'
});

// Creates a relationship between Comment and BlogPost model, with a "belongs to" relationship of the Comment to the BlogPost.
Comment.belongsTo(BlogPost, {
  foreignKey: 'postId'
})

// Creates a relationship between Comment and User model, with a "belongs to" relationship of the Comment to the User.
Comment.belongsTo(User, { 
  foreignKey: 'userId' 
});

// Creates a relationship between User and Comment model, with the User having a "has many" relationship with Comment model.
User.hasMany(Comment, { 
  foreignKey: 'userId' 
});

module.exports = { User, BlogPost, Comment};
