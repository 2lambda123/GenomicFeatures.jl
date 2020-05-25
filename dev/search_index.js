var documenterSearchIndex = {"docs":
[{"location":"man/intervals/#Genomic-Interval-Manipulation-1","page":"Intervals","title":"Genomic Interval Manipulation","text":"","category":"section"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The GenomicFeatures module consists of tools for working efficiently with genomic intervals.","category":"page"},{"location":"man/intervals/#Interval-Type-1","page":"Intervals","title":"Interval Type","text":"","category":"section"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Intervals in GenomicFeatures are consistent with ranges in Julia: 1-based and end-inclusive. When data is read from formats with different representations (i.e. 0-based and/or end-exclusive) they are always converted automatically. Similarly when writing data, you should not have to reason about off-by-one errors due to format differences while using functionality provided in GenomicFeatures.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The Interval type is defined as","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"struct Interval{T} <: IntervalTrees.AbstractInterval{Int64}\n    seqname::String\n    first::Int64\n    last::Int64\n    strand::Strand\n    metadata::T\nend","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The first three fields (seqname, first, and last) are mandatory arguments when constructing the Interval object. The seqname field holds the sequence name associated with the interval. The first and last fields are the leftmost and rightmost positions of the interval, which can be accessed with leftposition and rightposition functions, respectively.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The strand field can take four kinds of values listed in the next table:","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Symbol Constant Meaning\n'?' STRAND_NA strand is unknown or inapplicable\n'+' STRAND_POS positive strand\n'-' STRAND_NEG negative strand\n'.' STRAND_BOTH non-strand-specific feature","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Interval is parameterized on metadata type, which lets it efficiently and precisely be specialized to represent intervals from a variety of formats.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The default strand and metadata value are STRAND_BOTH and nothing:","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"julia> Interval(\"chr1\", 10000, 20000)\nGenomicFeatures.Interval{Nothing}:\n  sequence name: chr1\n  leftmost position: 10000\n  rightmost position: 20000\n  strand: .\n  metadata: nothing\n\njulia> Interval(\"chr1\", 10000, 20000, '+')\nGenomicFeatures.Interval{Nothing}:\n  sequence name: chr1\n  leftmost position: 10000\n  rightmost position: 20000\n  strand: +\n  metadata: nothing\n","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The following example shows all accessor functions for the five fields:","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"julia> i = Interval(\"chr1\", 10000, 20000, '+', \"some annotation\")\nGenomicFeatures.Interval{String}:\n  sequence name: chr1\n  leftmost position: 10000\n  rightmost position: 20000\n  strand: +\n  metadata: some annotation\n\njulia> seqname(i)\n\"chr1\"\n\njulia> leftposition(i)\n10000\n\njulia> rightposition(i)\n20000\n\njulia> strand(i)\nSTRAND_POS\n\njulia> metadata(i)\n\"some annotation\"\n","category":"page"},{"location":"man/intervals/#Collections-of-Intervals-1","page":"Intervals","title":"Collections of Intervals","text":"","category":"section"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Collections of intervals are represented using the IntervalCollection type, which is a general purpose indexed container for intervals. It supports fast intersection operations as well as insertion, deletion, and sorted iteration.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Interval collections can be initialized by inserting elements one by one using push!.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"# The type parameter (Nothing here) indicates the interval metadata type.\ncol = IntervalCollection{Nothing}()\n\nfor i in 1:100:10000\n    push!(col, Interval(\"chr1\", i, i + 99))\nend","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Incrementally building an interval collection like this works, but IntervalCollection also has a bulk insertion constructor that is able to build the indexed data structure extremely efficiently from an array of intervals.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"col = IntervalCollection([Interval(\"chr1\", i, i + 99) for i in 1:100:10000])","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"Building IntervalCollections in one shot like this should be preferred when it's convenient or speed is an issue.","category":"page"},{"location":"man/intervals/#Overlap-Query-1","page":"Intervals","title":"Overlap Query","text":"","category":"section"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"There are number of eachoverlap functions in the GenomicFeatures module. They follow two patterns:","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"interval versus collection queries which return an iterator over intervals in the collection that overlap the query, and\ncollection versus collection queries which iterate over all pairs of overlapping intervals.","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"eachoverlap","category":"page"},{"location":"man/intervals/#GenomicFeatures.eachoverlap","page":"Intervals","title":"GenomicFeatures.eachoverlap","text":"eachoverlap(intervals_a, intervals_b, [seqname_isless=Base.isless])\n\nCreate an iterator of overlapping intervals between intervals_a and intervals_b.\n\nThis function assumes elements of intervals_a and intervals_b are sorted by its sequence name and left position. If the element type is not a subtype of GenomicFeatures.Interval, elements are converted to Interval objects.\n\nThe third optional argument is a function that defines the order of sequence names. The default function is Base.isless, which is the lexicographical order.\n\n\n\n\n\n","category":"function"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"The order of interval pairs is the same as the following nested loop but eachoverlap is often much faster:","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"for a in intervals_a, b in intervals_b\n    if isoverlapping(a, b)\n        # do something...\n    end\nend","category":"page"},{"location":"man/intervals/#Coverage-1","page":"Intervals","title":"Coverage","text":"","category":"section"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"A special sort of intersection can also be performed on an interval stream against itself to produce \"coverage intervals\".","category":"page"},{"location":"man/intervals/#","page":"Intervals","title":"Intervals","text":"coverage","category":"page"},{"location":"man/intervals/#GenomicFeatures.coverage","page":"Intervals","title":"GenomicFeatures.coverage","text":"coverage(intervals)\n\nCompute the coverage of a collection of intervals and return an IntervalCollection that contains run-length encoded coverage data.\n\nFor example, given intervals like:\n\n[------]     [------------]\n   [---------------]\n\nThis function would return a new set of disjoint intervals with annotated coverage like:\n\n[1][-2-][-1-][--2--][--1--]\n\n\n\n\n\n","category":"function"},{"location":"#GenomicFeatures-1","page":"Home","title":"GenomicFeatures","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: latest release) (Image: MIT license) (Image: Stable documentation) (Image: Latest documentation) (Image: lifecycle) (Image: Chat)","category":"page"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The GenomicFeatures package provides utilities for working with interval based genomic annotations. It builds on IntervalTrees to provide a data-structures and algorithms for various formats such as BED, GFF3, bigWig and bigBed.  ","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Releases of GenomicFeatures version 2.0.0 and above are registered and made available to install through BioJulia's package registry. By default, Julia's package manager only uses the \"General\" package registry.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"To add the BioJulia registry from the Julia REPL, press ] to enter pkg mode, then enter the following command:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"registry add https://github.com/BioJulia/BioJuliaRegistry.git","category":"page"},{"location":"#","page":"Home","title":"Home","text":"After adding the registry to your configuration, you can install GenomicFeatures while in pkg mode with the following:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"add GenomicFeatures","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the develop branch to try new features before release.","category":"page"},{"location":"#Testing-1","page":"Home","title":"Testing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"GenomicFeatures is tested against Julia 1.X on Linux, OS X, and Windows.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Latest build status:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: Unit tests) (Image: Documentation) (Image: codecov)","category":"page"},{"location":"#Contributing-1","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Take a look at the contributing files detailed contributor and maintainer guidelines, and code of conduct.","category":"page"},{"location":"#Financial-contributions-1","page":"Home","title":"Financial contributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development of the community, it will be \"merged\" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.","category":"page"},{"location":"#Backers-and-Sponsors-1","page":"Home","title":"Backers & Sponsors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Thank you to all our backers and sponsors!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Love our work and community? Become a backer.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: backers)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project. Your logo will show up here with a link to your website.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Questions?-1","page":"Home","title":"Questions?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you have a question about contributing or using BioJulia software, come on over and chat to us on Gitter, or you can try the Bio category of the Julia discourse site.","category":"page"},{"location":"api/api/#API-Reference-1","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/api/#Public-1","page":"API Reference","title":"Public","text":"","category":"section"},{"location":"api/api/#","page":"API Reference","title":"API Reference","text":"Modules = [GenomicFeatures]\nPrivate = false","category":"page"},{"location":"api/api/#GenomicFeatures.STRAND_BOTH","page":"API Reference","title":"GenomicFeatures.STRAND_BOTH","text":"Both strand ('.')\n\n\n\n\n\n","category":"constant"},{"location":"api/api/#GenomicFeatures.STRAND_NA","page":"API Reference","title":"GenomicFeatures.STRAND_NA","text":"Unknown strand ('?')\n\n\n\n\n\n","category":"constant"},{"location":"api/api/#GenomicFeatures.STRAND_NEG","page":"API Reference","title":"GenomicFeatures.STRAND_NEG","text":"Negative strand ('-')\n\n\n\n\n\n","category":"constant"},{"location":"api/api/#GenomicFeatures.STRAND_POS","page":"API Reference","title":"GenomicFeatures.STRAND_POS","text":"Positive strand ('+')\n\n\n\n\n\n","category":"constant"},{"location":"api/api/#GenomicFeatures.Interval","page":"API Reference","title":"GenomicFeatures.Interval","text":"A genomic interval specifies interval with some associated metadata\n\n\n\n\n\n","category":"type"},{"location":"api/api/#GenomicFeatures.Interval-Union{Tuple{Any}, Tuple{T}} where T","page":"API Reference","title":"GenomicFeatures.Interval","text":"Interval{T}(data)\n\nThe returned data is converted to Interval{T} if there is an implemented Base.convert function for the type of data. This method provides a useful hook for converting custom types to Interval{T}.\n\n\n\n\n\n","category":"method"},{"location":"api/api/#BioGenerics.isoverlapping-Union{Tuple{T}, Tuple{S}, Tuple{Interval{S},Interval{T}}} where T where S","page":"API Reference","title":"BioGenerics.isoverlapping","text":"Return true if interval a overlaps interval b, with no consideration to strand\n\n\n\n\n\n","category":"method"},{"location":"api/api/#BioGenerics.leftposition-Tuple{Interval}","page":"API Reference","title":"BioGenerics.leftposition","text":"leftposition(i::Interval)\n\nReturn the leftmost position of i.\n\n\n\n\n\n","category":"method"},{"location":"api/api/#BioGenerics.rightposition-Tuple{Interval}","page":"API Reference","title":"BioGenerics.rightposition","text":"rightposition(i::Interval)\n\nReturn the rightmost position of i.\n\n\n\n\n\n","category":"method"},{"location":"api/api/#GenomicFeatures.coverage","page":"API Reference","title":"GenomicFeatures.coverage","text":"coverage(intervals)\n\nCompute the coverage of a collection of intervals and return an IntervalCollection that contains run-length encoded coverage data.\n\nFor example, given intervals like:\n\n[------]     [------------]\n   [---------------]\n\nThis function would return a new set of disjoint intervals with annotated coverage like:\n\n[1][-2-][-1-][--2--][--1--]\n\n\n\n\n\n","category":"function"},{"location":"api/api/#GenomicFeatures.eachoverlap","page":"API Reference","title":"GenomicFeatures.eachoverlap","text":"eachoverlap(intervals_a, intervals_b, [seqname_isless=Base.isless])\n\nCreate an iterator of overlapping intervals between intervals_a and intervals_b.\n\nThis function assumes elements of intervals_a and intervals_b are sorted by its sequence name and left position. If the element type is not a subtype of GenomicFeatures.Interval, elements are converted to Interval objects.\n\nThe third optional argument is a function that defines the order of sequence names. The default function is Base.isless, which is the lexicographical order.\n\n\n\n\n\n","category":"function"},{"location":"api/api/#Internal-1","page":"API Reference","title":"Internal","text":"","category":"section"},{"location":"api/api/#","page":"API Reference","title":"API Reference","text":"Modules = [GenomicFeatures]\nPublic = false","category":"page"},{"location":"api/api/#Base.findfirst-Union{Tuple{S}, Tuple{T}, Tuple{IntervalCollection{T},Interval{S}}} where S where T","page":"API Reference","title":"Base.findfirst","text":"Find a the first interval with matching start and end points.\n\nReturns that interval, or 'nothing' if no interval was found.\n\n\n\n\n\n","category":"method"},{"location":"api/api/#GenomicFeatures.isordered-Union{Tuple{T}, Tuple{Interval{T},Interval{T}}, Tuple{Interval{T},Interval{T},Function}} where T","page":"API Reference","title":"GenomicFeatures.isordered","text":"Check if two intervals are well ordered.\n\nIntervals are considered well ordered if seqname(a) <= seqname(b) and leftposition(a) <= leftposition(b).\n\n\n\n\n\n","category":"method"},{"location":"api/api/#GenomicFeatures.precedes-Union{Tuple{T}, Tuple{Interval{T},Interval{T}}, Tuple{Interval{T},Interval{T},Function}} where T","page":"API Reference","title":"GenomicFeatures.precedes","text":"Return true if interval a entirely precedes b.\n\n\n\n\n\n","category":"method"}]
}
