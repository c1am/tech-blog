const { Post } = require('../models');

const seed_posts = [
    {
        title: 'An Post on Printer Troubleshooting',
        content: 'Printers are tricky to work with as they are small machines but contain many different parts inside.',
        userId: '4'
    },
    {
        title: 'Telephones',
        content: 'The Cisco Telecommunication network requires certain certifications in order to fully understand it.',
        userId: '3'
    },
    {
        title: 'PCs Vs. Macs',
        content: 'Unlike MacOS, PCs offer a more customizable environment and operating system for users.',
        userId: '1'
    },
    {
        title: 'Wireless Networking',
        content: 'Many networking teams also require their own certifications in order to troubleshoot the complexity of wireless networks.',
        userId: '2'
    },
    {
        title: 'Developers',
        content: 'In order for a secure and propietary technical work environment, dedicated developers assist with this.',
        userId: '5'
    }
];

const post_data = () => Post.bulkCreate(seed_posts);

module.exports = post_data;