var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })

  example1.items.push({ message: 'Baz' })
  example1.items.unshift({ message: 'Baz' })