/**
 * Created by Kat on 28.06.2016.
 */
//var _ = require('lodash');

var cats = [
    {
        id: 1,
        breed: 'American Bobtail Cat',
        img: 'img/cat1.jpg',
        description: 'While the breed is still developing, breeders say that Bobtails are playful, energetic, and friendly, and possess an uncanny intelligence for Houdini-type escapes from closed rooms and fastened cages.'
    },
    {
        id: 2,
        breed: 'Birman Cat',
        img: 'img/cat2.jpg',
        description: 'Birmans are affectionate, gentle, and faithful companions with an air of dignity that seems to invite adoration by their human companions. As former temple cats, Birmans seem to have become accustomed to adoration.'
    },
    {
        id: 3,
        breed: 'Cornish Rex Cat',
        img: 'img/cat3.jpg',
        description: 'Cornish Rexes are good for folks who like having their lives run by active, inquisitive, gazelle-like felines that love a good joke, as long as it\'s not on them.'
    },
    {
        id: 4,
        breed: 'Munchkin Cat',
        img: 'img/cat4.jpg',
        description: 'For their part, Munchkins, oblivious to the controversy surrounding them, go on being just what they are, cats; self-assured and outgoing.'
    },
    {
        id: 5,
        breed: 'Scottish Fold Cat',
        img: 'img/cat5.jpg',
        description: 'Scottish Folds are intelligent, sweet-tempered, soft-spoken, and easily adaptable to new people and situations.'
    },
    {
        id: 6,
        breed: 'Snowshoe Cat',
        img: 'img/cat6.jpg',
        description: 'Breeders brave enough to take on the Snowshoe challenge find that the cat pays back the effort in love and affection.'
    },
    {
        id: 7,
        breed: 'Sphynx Cat',
        img: 'img/cat7.jpg',
        description: 'According to the French breed standard, the Sphynx is part monkey, part dog, part child, and part cat.'
    }
];

module.exports = {
    all: function() {
        return cats;
    }
}