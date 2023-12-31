module Utilities

using Distributions
using GenomicFeatures
using Random

# Generate an array of n random GenomicInterval{Int} object.
# With group name samples from groupnames, and intervals drawn to lie in [1, maxpos].
function random_intervals(groupnames::Vector{String}, maxpos::Int, n::Int)
    seq_dist = Categorical(length(groupnames))
    strand_dist = Categorical(2)
    length_dist = Normal(1000, 1000)
    intervals = Vector{GenomicInterval{Int}}(undef, n)
    for i in 1:n
        intlen = maxpos
        while intlen >= maxpos || intlen <= 0
            intlen = ceil(Int, rand(length_dist))
        end
        first = rand(1:maxpos-intlen)
        last = first + intlen - 1
        strand = rand(strand_dist) == 1 ? STRAND_POS : STRAND_NEG
        intervals[i] = GenomicInterval{Int}(groupnames[rand(seq_dist)], first, last, strand, i)
    end
    return intervals
end

function random_intervals(groupnames::Vector{String}, maxpos::Int, n::Int, seed::Int)
    Random.seed!(seed)
    return random_intervals(groupnames, maxpos, n)
end

end  # module Utilities
