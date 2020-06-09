using BenchmarkTools
# using BenchmarkTools: @benchmarkable, BenchmarkGroup

using GenomicFeatures

include(joinpath(@__DIR__, "..", "test", "Utilities.jl"))

import ..Utilities: random_intervals

N = 1000
SEED = 1234
SEQNAMES = "chr" .* string.(1:3)

# Generate an array of n random Interval{Int} object. With sequence names
# samples from seqnames, and intervals drawn to lie in [1, maxpos].
function random_intervals(seqnames::Vector{String}, maxpos::Int, n::Int)
    seq_dist = Categorical(length(seqnames))
    strand_dist = Categorical(2)
    length_dist = Normal(1000, 1000)
    intervals = Vector{Interval{Int}}(undef, n)
    for i in 1:n
        intlen = maxpos
        while intlen >= maxpos || intlen <= 0
            intlen = ceil(Int, rand(length_dist))
        end
        first = rand(1:maxpos-intlen)
        last = first + intlen - 1
        strand = rand(strand_dist) == 1 ? STRAND_POS : STRAND_NEG
        intervals[i] = Interval{Int}(seqnames[rand(seq_dist)], first, last, strand, i)
    end
    return intervals
end

function random_intervals(seqnames::Vector{String}, maxpos::Int, n::Int, seed::Int)
    Random.seed!(seed)
    return random_intervals(seqnames, maxpos, n)
end

intervals = random_intervals(SEQNAMES, 1000, N, SEED)
intervals_sorted = sort(intervals)

SUITE = BenchmarkGroup()

let suite = SUITE["accessors"] = BenchmarkGroup()
    s0 = suite["$(typeof(intervals))"] = BenchmarkGroup()
    s0["seqname"] = @benchmarkable(seqname.($intervals))
    s0["leftposition"] = @benchmarkable(leftposition.($intervals))
    s0["rightposition"] = @benchmarkable(rightposition.($intervals))
    s0["strand"] = @benchmarkable(strand.($intervals))
    s0["metadata"] = @benchmarkable(metadata.($intervals))
end

let suite = SUITE["sort"] = BenchmarkGroup()
    suite["$(typeof(intervals))"] = @benchmarkable(sort(i), setup=(i = copy($intervals)))
end

let suite = SUITE["insert"] = BenchmarkGroup()
    suite["shorthand"] = @benchmarkable(IntervalCollection($intervals_sorted))
    suite["type"] = @benchmarkable(IntervalCollection{Int}($intervals_sorted))
end

let suite = SUITE["push"] = BenchmarkGroup()
    suite["$(typeof(intervals))"] = @benchmarkable([push!(col, i) for i in $intervals], setup=(col=IntervalCollection{Int}()))
end

let suite = SUITE["eachoverlap"] = BenchmarkGroup()
    intervals_a = intervals_sorted
    intervals_b = sort(random_intervals(SEQNAMES, 1000, N, SEED+1))

    col_a = IntervalCollection(intervals_a)
    col_b = IntervalCollection(intervals_b)

    As = [intervals_a, col_a]
    Bs = [intervals_b, col_b]

    for (A, B) in Iterators.product(As,Bs)
        str = "$(typeof(A)), $(typeof(B))"
        suite[str] = @benchmarkable(collect(eachoverlap($A,$B)))
    end
end
