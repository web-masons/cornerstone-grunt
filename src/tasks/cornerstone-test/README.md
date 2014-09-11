# Test Task
The test task is an alias for grouping different test runners to
make them easy to run from the command line.  The test task takes an array of tasks
to run, similar to the concurrent task.

## Example

```
test: {
  unit: {
    'karma',
    'phpunit'
  },
  functional: {
    'casper:functional'
  },
  integration: {
    'casper:integration'
  }
}
```