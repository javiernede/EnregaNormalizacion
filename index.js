import { schema, normalize } from "normalizr"

const blogspost = {
    id: "1",
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello world",
    author: {
        id: "1",
        name: "John Doe"
    },
    comments: [{
            id: "1",
            author: "Rob",
            content: "Nice post!"
        },
        {
            id: "2",
            author: "Jane",
            content: "I totally agree with you!"
        }
    ]
}

const authorSchema = new schema.Entity('authors');
const comentsSchema = new schema.Entity('coments');

const postSchema = new schema.Entity('post', {
    author: authorSchema,
    comments: [comentsSchema]
})

const normalizerData = normalize(blogspost, postSchema);
console.log(normalizerData);