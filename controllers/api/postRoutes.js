const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.session.userId,
        });

        res.status(200).json(newPost);
    }   catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                userId: req.session.userId,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    }   catch (err) {
        res.status(500).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        const newPost = await BlogPost.update({
          ...req.body,
        },{
            where: {
                id: req.body.blogId
            }
        }
    );

        res.status(200).json(newPost);
    }   catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;