# <img src="sticker.svg" width="30%" align="right" /> GenomicFeatures

[![latest release][release-img]][release-url]
[![MIT license][license-img]][license-url]
[![stable documentation][docs-stable-img]][docs-stable-url]
[![latest documentation][docs-latest-img]][docs-latest-url]
![lifecycle][lifecycle-maturing]
[![Chat on Gitter][gitter-img]][gitter-url]

## Description

GenomicFeatures provides utilities for working with interval based genomic annotations.
It builds on [IntervalTrees]() to provide a data-structures, algorithms and IO tools for various formats such as BED, GFF3, bigWig and bigBed.  

## Installation

You can install GenomicFeatures from the [Julia REPL](https://docs.julialang.org/en/v1/manual/getting-started/).
Press `]` to enter [pkg mode](https://docs.julialang.org/en/v1/stdlib/Pkg/), then enter the following:

```julia
add GenomicFeatures
```

If you are interested in the cutting edge of the development, please check out the [develop branch](https://github.com/BioJulia/GenomicFeatures.jl/tree/develop) to try new features before release.

## Testing

GenomicFeatures is tested against julia `0.6` and current `0.7-dev` on Linux,
OS X, and Windows.

| **Latest release** | **Latest build status** |
|:------------------:|:-----------------------:|
| [![julia06][juliapkg06-img]][juliapkg-url] [![julia07][juliapkg07-img]][juliapkg-url] | [![travis][travis-img]][travis-url] [![appveyor][appveyor-img]][appveyor-url] [![coverage][codecov-img]][codecov-url] |

## Contributing and Questions

We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.

Take a look at the [CONTRIBUTING](CONTRIBUTING.md) file provided with this package for detailed contributor and maintainer guidelines.

If you have a question about contributing or using this package, come on over and chat to us on [Gitter][gitter-url], or you can try the [Bio category of the Julia discourse site](https://discourse.julialang.org/c/domain/bio).

[release-img]:            https://img.shields.io/github/release/BioJulia/GenomicFeatures.jl.svg
[release-url]:            https://github.com/BioJulia/GenomicFeatures.jl/releases/latest
[license-img]:            https://img.shields.io/badge/license-MIT-green.svg
[license-url]:            https://github.com/BioJulia/GenomicFeatures.jl/blob/master/LICENSE
[docs-stable-img]:        https://img.shields.io/badge/docs-stable-blue.svg
[docs-stable-url]:        https://biojulia.github.io/GenomicFeatures.jl/stable
[docs-latest-img]:        https://img.shields.io/badge/docs-latest-blue.svg
[docs-latest-url]:        https://biojulia.github.io/GenomicFeatures.jl/latest/
[lifecycle-experimental]: https://img.shields.io/badge/lifecycle-experimental-orange.svg
[lifecycle-maturing]:     https://img.shields.io/badge/lifecycle-maturing-blue.svg
[lifecycle-stable]:       https://img.shields.io/badge/lifecycle-stable-brightgreen.svg
[lifecycle-retired]:      https://img.shields.io/badge/lifecycle-retired-orange.svg
[lifecycle-archived]:     https://img.shields.io/badge/lifecycle-archived-red.svg
[lifecycle-dormant]:      https://img.shields.io/badge/lifecycle-dormant-blue.svg
[lifecycle-questioning]:  https://img.shields.io/badge/lifecycle-questioning-blue.svg
[gitter-img]:             https://img.shields.io/gitter/room/BioJulia/GenomicFeatures.svg
[gitter-url]:             https://gitter.im/BioJulia/GenomicFeatures.jl
[juliapkg06-img]:         http://pkg.julialang.org/badges/GenomicFeatures_0.6.svg
[juliapkg07-img]:         http://pkg.julialang.org/badges/GenomicFeatures_0.7.svg
[juliapkg-url]:           http://pkg.julialang.org/?pkg=GenomicFeatures
[travis-img]:             https://img.shields.io/travis/BioJulia/GenomicFeatures.jl/master.svg?label=Linux+/+macOS
[travis-url]:             https://travis-ci.org/BioJulia/GenomicFeatures.jl
[appveyor-img]:           https://ci.appveyor.com/api/projects/status/dnup6vbbvai92bl8/branch/master?svg=true
[appveyor-url]:           https://ci.appveyor.com/project/BenJWard/genomicfeatures-jl/branch/master
[codecov-img]:            http://codecov.io/github/BioJulia/GenomicFeatures.jl/coverage.svg?branch=master
[codecov-url]:            http://codecov.io/github/BioJulia/GenomicFeatures.jl?branch=master
