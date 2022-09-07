The `chemical-element` partial should be called like this from the `inspection` partial:

```hbs
{{#each (chunk this 15 "SupplementaryInformation, C70" 1)}}
  {{> chemicalElement this}}
{{/each}}
```

An array of objects is passed to `chemicalElement`.
