import React from 'react'
import Code from '../components/Code'

function Hash() {
  const hashCode = `function hashString(key, arrayLen) {
  let total = 0
  let WEIRD_PRIME = 31    // we use prime numbers to try to minimize collisions
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen   
    // we use % to ensure that the output is between zero and arrayLen - 1
  }
  return total
}`

  return (
    <div className="hash page ui container padded">
      <h1 className="ui dividing header page-header">
        Hash Tables
      </h1>
      <div className="ui raised segment container padded introduction">
        <p>Hash Tables, also known as a Hash Map, are used to store <strong>key-value</strong> pairs - the <strong>key</strong> points to a <strong>value</strong>, hence a key-value pair.</p>
        <p>In arrays, we have numbered indexes, so it's easy to grab a value since all we have to do is look at what's stored in the array at that index number. <br/>However, with hash tables, we're using strings. How do we use the key to find a value in our memory?</p>
        <p>To implement a hash table, let's use an array to represent our memory store.</p>
        <p>Because our keys are strings, we need a function that can convert keys into valid array indices. Functions that do this are called <strong>hash functions</strong>.</p>
        <p>Here's a very basic implementation of that:</p>
        <div className="demo">
          <Code code={hashCode} />
        </div>
        <h3 className="ui dividing header">What makes a good has function?</h3>
        <ul>
          <li>Must be fast (ie constant time) so we can fetch/update/remove things quickly</li>
          <li>Must distribute things uniformly so that outputs at specific indices don't cluster too often (collisions)</li>
          <li>Must be deterministic, meaning that for a given input value it must always generate the same hash value</li>
        </ul>
      </div>
      <div className="ui container">
        testing
      </div>
    </div>
  )
}

export default Hash
