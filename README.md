# <img src="./sticker.svg" width="30%" align="right" /> GenomicFeatures

[![latest release](https://img.shields.io/github/release/BioJulia/GenomicFeatures.jl.svg)](https://github.com/BioJulia/GenomicFeatures.jl/releases/latest)
[![DOI](https://zenodo.org/badge/94160625.svg)](https://zenodo.org/badge/latestdoi/94160625)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/BioJulia/GenomicFeatures.jl/blob/master/LICENSE)
[![Stable documentation](https://img.shields.io/badge/docs-stable-blue.svg)](https://biojulia.github.io/GenomicFeatures.jl/stable)
[![Latest documentation](https://img.shields.io/badge/docs-dev-blue.svg)](https://biojulia.github.io/GenomicFeatures.jl/dev/)
[![lifecycle](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

## Description
The GenomicFeatures package provides utilities for working with interval based genomic annotations.
It builds on [IntervalTrees](https://github.com/biojulia/intervaltrees.jl) to provide a data-structures and algorithms for various formats such as [BED](https://github.com/biojulia/bed.jl), [GFF3](https://github.com/biojulia/gff3.jl), [bigWig](https://github.com/biojulia/bigwig.jl) and [bigBed](https://github.com/biojulia/bigbed.jl).  

## Installation
You can install the GenomicFeatures package from the [Julia REPL](https://docs.julialang.org/en/v1/manual/getting-started/).
Press `]` to enter [pkg mode](https://docs.julialang.org/en/v1/stdlib/Pkg/), then enter the following command:
```julia
add GenomicFeatures
```

If you are interested in the cutting edge of the development, please check out the [develop branch](https://github.com/BioJulia/GenomicFeatures.jl/tree/develop) to try new features before release.

## Testing

GenomicFeatures is tested against Julia `1.X` on Linux, OS X, and Windows.

**Latest build status:**

[![Unit Tests](https://github.com/BioJulia/GenomicFeatures.jl/actions/workflows/UnitTests.yml/badge.svg)](https://github.com/BioJulia/GenomicFeatures.jl/actions/workflows/UnitTests.yml)
[![Documentation](https://github.com/BioJulia/GenomicFeatures.jl/actions/workflows/Documentation.yml/badge.svg)](https://github.com/BioJulia/GenomicFeatures.jl/actions/workflows/Documentation.yml)
[![codecov](https://codecov.io/gh/BioJulia/GenomicFeatures.jl/branch/develop/graph/badge.svg)](https://codecov.io/gh/BioJulia/GenomicFeatures.jl)
[![Downstream](https://github.com/BioJulia/GenomicFeatures.jl/actions/workflows/Downstream.yml/badge.svg)](https://github.com/BioJulia/GenomicFeatures.jl/actions/workflows/Downstream.yml)

## Contributing

We appreciate [contributions](https://github.com/BioJulia/GenomicFeatures.jl/graphs/contributors) from users including reporting bugs, fixing issues, improving performance and adding new features.

Take a look at the [contributing files](https://github.com/BioJulia/Contributing) detailed contributor and maintainer guidelines, and code of conduct.


### Financial contributions

We also welcome financial contributions in full transparency on our [open collective](https://opencollective.com/biojulia).
Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.


## Backers & Sponsors

Thank you to all our backers and sponsors!

Love our work and community? [Become a backer](https://opencollective.com/biojulia#backer).

[![backers](https://opencollective.com/biojulia/backers.svg?width=890)](https://opencollective.com/biojulia#backers)

Does your company use BioJulia?
Help keep BioJulia feature rich and healthy by [sponsoring the project](https://opencollective.com/biojulia#sponsor).
Your logo will show up here with a link to your website.

[![](https://opencollective.com/biojulia/sponsor/0/avatar.svg)](https://opencollective.com/biojulia/sponsor/0/website)
[![](https://opencollective.com/biojulia/sponsor/1/avatar.svg)](https://opencollective.com/biojulia/sponsor/1/website)
[![](https://opencollective.com/biojulia/sponsor/2/avatar.svg)](https://opencollective.com/biojulia/sponsor/2/website)
[![](https://opencollective.com/biojulia/sponsor/3/avatar.svg)](https://opencollective.com/biojulia/sponsor/3/website)
[![](https://opencollective.com/biojulia/sponsor/4/avatar.svg)](https://opencollective.com/biojulia/sponsor/4/website)
[![](https://opencollective.com/biojulia/sponsor/5/avatar.svg)](https://opencollective.com/biojulia/sponsor/5/website)
[![](https://opencollective.com/biojulia/sponsor/6/avatar.svg)](https://opencollective.com/biojulia/sponsor/6/website)
[![](https://opencollective.com/biojulia/sponsor/7/avatar.svg)](https://opencollective.com/biojulia/sponsor/7/website)
[![](https://opencollective.com/biojulia/sponsor/8/avatar.svg)](https://opencollective.com/biojulia/sponsor/8/website)
[![](https://opencollective.com/biojulia/sponsor/9/avatar.svg)](https://opencollective.com/biojulia/sponsor/9/website)


## Questions?

If you have a question about contributing or using BioJulia software, come on over and chat to us on [the Julia Slack workspace](https://julialang.slack.com/channels/biology), or you can try the [Bio category of the Julia discourse site](https://discourse.julialang.org/c/domain/bio).
