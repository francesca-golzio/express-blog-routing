const app = express();
const port = 3000;

/* Posts array */
const posts = [
  {
    id: 1,
    title: 'Post Uno',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    image: '/images/post1.svg',
    tags: ['intro', 'lorem']
  },
  {
    id: 2,
    title: 'Post Due',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    image: '/images/post2.svg',
    tags: ['news', 'example']
  },
  {
    id: 3,
    title: 'Post Tre',
    content: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: '/images/post3.svg',
    tags: ['tips', 'lorem']
  },
  {
    id: 4,
    title: 'Post Quattro',
    content: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    image: '/images/post4.svg',
    tags: ['howto', 'example']
  },
  {
    id: 5,
    title: 'Post Cinque',
    content: 'Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna.',
    image: '/images/post5.svg',
    tags: ['lorem', 'final']
  }
];

/* Rendo accessibili gli assets static */
app.use(express.static('public'));

/* Server Index */
app.get('/', (req, res) => {
  res.send('Sono il server del blog');
});

/* Bacheca Index */
app.get('/bacheca', (req, res) => {
  res.json({posts});
});

/* Mostro un post */
app.get('/bacheca/:id', (req, res) => {
  res.send('Ecco il post con id' + req.param.id);
});

/* Creo un nuovo post */
app.post('/bacheca', (req, res) => {
  res.send('Nuovo post creato');
});

/* Aggiorno tutto un post */
app.put('/bacheca/:id', (req, res) => {
  res.send('NEW! Post aggiornato' + req.param.id);
});

/* Aggiorno parte di un post */
app.patch('/bacheca/:id', (req, res) => {
  res.send('Post aggiornato (minor updates)' + req.param.id);
});

/* Elimino un post */
app.delete('bacheca/:id', (req, res) => {
  res.send('Post eliminato' + req.param.id);
});


/* Il Server sta in ascolto alla port 3000 */
app.listen(3000, () => {
console.log('Il Server gira qui http://localhost:3000');
});