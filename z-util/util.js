// Returns the minimum value in a list of numbers
export default function min(values) {
    return Math.min(...values);

}

// Returns the maximum value in a list of numbers
export default function max(values) {
    return Math.max(...values);
}

// Returns whether if a value is between two bounds (inclusive by default)
export default function between(value, bounds, inclusive = true) {
    const low = min(bounds);
    const high = max(bounds);
    
    if (!inclusive) {
        return value > low && value < high;
    }

    return value >= low && value <= high;

}
