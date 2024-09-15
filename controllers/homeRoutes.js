const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const { post } = require('./api');

router.get('/', async (req, res) => {
    try {
        const postData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true}));
        console.log("Home",req.session.logged_in,posts)
        res.render('homepage', {
            posts,
            logged_in: req.session.loggedIn
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
  console.log("post",req.params.id);
    try {
        const postData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    include: [User],
                  },
            ],
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
          }

        const post = postData.get({ plain: true });
        console.log(post);

        res.render('post', {
            ...post,
            logged_in: req.session.loggedIn
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;