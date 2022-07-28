import request from 'supertest'

import app from '../src/app.js'

describe('GET /iecho', () => {
  it('response expected 200', done => {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  it('response expected is tset', done => {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('{"text":"tset","palindrome":false}')
      .end(err => err ? done(err) : done())
  })
  it('response expected is aloh', done => {
    request(app)
      .get('/iecho?text=hola')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('{"text":"aloh","palindrome":false}')
      .end(err => err ? done(err) : done())
  })
  it('response expected is ana', done => {
    request(app)
      .get('/iecho?text=ana')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('{"text":"ana","palindrome":true}')
      .end(err => err ? done(err) : done())
  })
  it('response expected is acurruca', done => {
    request(app)
      .get('/iecho?text=acurruca')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('{"text":"acurruca","palindrome":true}')
      .end(err => err ? done(err) : done())
  })
})
