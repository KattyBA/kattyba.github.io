/**
 * Created by Kat on 24.06.2016.
 */
var _ = require('lodash');

var dogs = [
    {
        id: 1,
        breed: 'French Bulldog',
        imageSmall: 'img/french_bulldog_small.jpg',
        imageBig: 'img/french_bulldog_big.jpg',
        descriptionSmall: 'The French Bulldog is a sturdy, compact, stocky little dog, with a large square head that has a rounded forehead.',
        description: 'The French Bulldog is a sturdy, compact, stocky little dog, with a large square head that has a rounded forehead. The muzzle is broad and deep with a well-defined stop. The nose is black, but may be lighter in lighter colored dogs. The upper lips hang down over the lower lips. The teeth meet in an underbite and the lower jaw is square and deep. The round, prominent eyes are set wide apart and are dark in color. The bat ears stand erect, are broad at the base narrowing in a triangular shape and rounded at the tips. The height at the withers to the ground should be approximately the same as the length from withers to the base of the tail. The tail is either straight or corkscrew. '
    },{
        id: 2,
        breed: 'Husky',
        imageSmall: 'img/husky_small.jpg',
        imageBig: 'img/husky_big.jpg',
        descriptionSmall: 'Siberian Huskies are strong, compact, working sled dogs. ',
        description: 'Siberian Huskies are strong, compact, working sled dogs. The medium-sized head is in proportion to the body, with a muzzle that is equal in length to the skull, with a well-defined stop. The color of the nose depends upon the color of the dog\'s coat. It is black in gray, tan or black dogs, liver in copper dogs and flesh-colored in pure white dogs. The medium-sized, oval-shaped eyes are moderately spaced and come in blue, brown, amber or any combination thereof. Eyes can be half blue and half brown (parti-eyed), or dogs can have one blue eye and one brown eye (bi-eyed). The erect ears are triangular in shape, and set high up on the head.'
    }, {
        id: 3,
        breed: 'Labrador',
        imageSmall: 'img/labrador_small.jpg',
        imageBig: 'img/labrador_big.jpg',
        descriptionSmall: 'The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed.',
        description: 'The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, he earned his keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic. Today’s Labrador Retriever is as good-natured and hard working as his ancestors, and he’s America’s most popular breed. These days the Lab works as a retriever for hunters, assistance dog to the handicapped, show competitor, and search and rescue dog, among other canine jobs.'
    }, {
        id: 4,
        breed: 'Lhasa apso',
        imageSmall: 'img/lhasa_apso_small.jpg',
        imageBig: 'img/lhasa_apso_big.jpg',
        descriptionSmall: 'If you are looking for a dog with an easy-care coat, it’s safe to say that the Lhasa Apso is not the right choice.',
        description: 'If you are looking for a dog with an easy-care coat, it’s safe to say that the Lhasa Apso is not the right choice. That glamorous Lhasa you see sweeping around the show ring is the product of endless hours of grooming. For a pet, expect to brush and comb the long, straight, heavy coat at least every other day. Pet Lhasas can be kept clipped short, but that still means frequent professional grooming. Neglected coats become tangled and matted, which is painful and can lead to serious skin infections. A Lhasa needs a bath at least every two to three weeks; his nails need to be trimmed and ears cleaned every week or as needed. And don\'t forget to brush his teeth.'
    }, {
        id: 5,
        breed: 'Poodle',
        imageSmall: 'img/poodle_small.jpg',
        imageBig: 'img/poodle_big.jpg',
        descriptionSmall: 'Poodles are notorious for their intelligence and ease of training. They are lively, active, fun-loving dogs with a sense of the ridiculous. Poodles thrive on attention and can develop bad habits such as nuisance barking if ignored or left alone.',
        description: 'Poodles come in three sizes or varieties: the standard (over 15 inches and 45 to 70 pounds [20 to 32 kilograms]), the miniature (10 or 11 inches to 15 inches and 12 to 20 pounds [5 to 9 kilograms]) and the toy (less than 10 inches and about five to seven pounds [2 to 3 kilograms]). All the Poodles share a square outline, with a long, elegant neck and a straight back. The tail is docked, but not short, so it can wave gaily. Poodles tend to have a leggy appearance and a long muzzle combined with dropped ears. They move with a springy, lively gait.'
    }, {
        id: 5,
        breed: 'Yorkshire terrier',
        imageSmall: 'img/yorkshire_terrier_small.jpg',
        imageBig: 'img/yorkshire_terrier_big.jpg',
        descriptionSmall: 'There are two schools of thought on the Yorkshire Terrier: (1) he is a vigorous terrier; (2) he is a delicate toy dog made for pampering.',
        description: 'There are two schools of thought on the Yorkshire Terrier: (1) he is a vigorous terrier; (2) he is a delicate toy dog made for pampering. The owner\'s view of him has much to do with how an individual dog turns out. For certain, the Yorkie is lively and inquisitive, physically and mentally quick, and spends much time trotting (or dashing) around checking things out. Larger dogs may view him as a delicacy, so he must always be leashed or fenced for his own protection; in addition, he can be an excitable chaser of birds and butterflies. A lover of comfort, the Yorkshire Terrier enjoys cuddling on laps and snuggling into soft pillows.'
    }
];

var buildDogs = function() {
    var rawDogs = JSON.parse(JSON.stringify(dogs));
    var builtDogs = [];
    var dog;

    for (var i = 0; i < rawDogs.length; i++) {
        dog = rawDogs[i];
        builtDogs.push(dog);
    }

    return builtDogs;
};

module.exports = {
    get: function(id) {
        return _.find(buildDogs(), function(dog){
            return dog.id === id;
        });
    },
    all: function() {
        return buildDogs();
    }
};