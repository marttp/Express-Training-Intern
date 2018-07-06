const expect = require('expect');
const request = require('supertest');

const { ObjectID } = require('mongodb');
const { Note } = require('../models/note');

const app = require('./../server');

const noteOneId = new ObjectID;
const noteTwoId = new ObjectID;

const notes = [
    {
        _id: noteOneId,
        title: "Mini Flutter application",
        content: "Create Flutter",
    },
    {
        _id: noteTwoId,
        title: "Mini Ionic application",
        content: "Create Ionic",
    }
]

//Run before described
beforeEach((done)=>{
    Note.remove()
    .then(()=>{
       return Note.insertMany(notes)
    }).then(()=>{
        done();
    })
})
// describe('GET /users',()=>{
//     it('Should return all users',(done)=>{
//         request(app)
//         .get('/users')
//         .expect(200)
//         .expect((res)=>{
//             const users = res.body.users;
//             expect(Array.isArray(users)).toBeTruthy();
//         })
//         .end(done);
//     });
// });

// describe('GET /users By id 2',()=>{
//     it('Should return users id 2',(done)=>{
//         request(app)
//         .get('/users/2')
//         .expect(200)
//         .expect((res)=>{
//             console.log(res.body);
//             const users = res.body;
//             expect(users.length >=1).toBeTruthy()
//             // expect(Array.isArray(users)).toBeTruthy()

//         })
//         .end(done);
//     });
// });

describe('GET /notes',()=>{
    it('Should return all notes',(done)=>{
        request(app)
        .get('/notes')
        .expect(200)
        .expect((res)=>{
            const notes = res.body;
            console.log(notes);
            expect(Array.isArray(notes)).toBeTruthy();
        })
        .end(done);
    });
});

describe('GET /notes/:id',()=>{
    it('Should return users id',(done)=>{
        request(app)
        .get('/notes/'+notes[0]._id.toHexString())
        .expect(200)
        .expect((res)=>{
            console.log(res.body);
            const note = res.body;
            // expect(note.length >=1).toBe(note[0].title)
            // expect(Array.isArray(users)).toBeTruthy()
            expect(note.title).toBe(notes[0].title)
        })
        .end(done);
    });
});