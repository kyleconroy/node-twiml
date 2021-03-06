
require.paths.unshift('spec', './spec/lib', 'lib')
require('jspec')
require('twiml').dsl()

JSpec
  .exec('spec/spec.twiml.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
