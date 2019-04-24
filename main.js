// pipe and compose

const execute = (arg, f) => f(arg)
const pipe = (...fs) => arg => fs.reduce(execute, arg)
const compose = (...fs) => arg => fs.reduceRight(execute, arg)

// utilities

const upper = s => s.toUpperCase()
const lower = s => s.toLowerCase()
const split = c => s => s.split(c)
const join  = c => cs => cs.join(c)
const capital = ([first, ...rest]) => upper(first) + join('')(rest)
const capitalize = words => words.map(capital)

// named partials

const splitAtSpaces = split(' ')
const joinWithHyphens = join('-')
const splitAtHyphens = split('-')
const joinWithSpaces = join(' ')

// piped functions

const slugify = pipe(lower, splitAtSpaces, joinWithHyphens)
const deslugify = pipe(splitAtHyphens, capitalize, joinWithSpaces)

// test

const shows = [
  'Brooklyn Nine Nine',
  'The Sopranos',
  'The Office',
  'The Good Place',
  'The Wire',
  'Breaking Bad',
  'Curb Your Enthusiasm'
]

const slugs = shows.map(slugify)
const deslugs = slugs.map(deslugify)

const log = (thing = '') => console.log(thing)

log('Deslugified:')
deslugs.forEach(log)
log()

log('Slugified:')
slugs.forEach(log)
log()
