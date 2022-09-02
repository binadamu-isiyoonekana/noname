window.SIDEBAR_ITEMS = {"enum":[["EdwardsFlags","Flags to be encoded into the serialization. The default flags (empty) should not change the binary representation."],["SWFlags","Flags to be encoded into the serialization. The default flags (empty) should not change the binary representation."],["SerializationError","This is an error that could occur during serialization"]],"fn":[["buffer_bit_byte_size",""],["buffer_byte_size","Converts the number of bits required to represent a number into the number of bytes required to represent it."]],"struct":[["EmptyFlags","Flags to be encoded into the serialization."]],"trait":[["CanonicalDeserialize","Deserializer in little endian format. This trait can be derived if all fields of a struct implement `CanonicalDeserialize` and the `derive` feature is enabled."],["CanonicalDeserializeWithFlags","Deserializer in little endian format allowing flags to be encoded."],["CanonicalSerialize","Serializer in little endian format. The serialization format must be ‘length-extension’ safe. e.g. if T implements Canonical Serialize and Deserialize, then for all strings `x, y`, if `a = T::deserialize(Reader(x))` and `a` is not an error, then it must be the case that `a = T::deserialize(Reader(x || y))`, and that both readers read the same number of bytes."],["CanonicalSerializeHashExt","The CanonicalSerialize induces a natural way to hash the corresponding value, of which this is the convenience trait."],["CanonicalSerializeWithFlags","Serializer in little endian format allowing to encode flags."],["Flags","Represents metadata to be appended to an object’s serialization. For example, when serializing elliptic curve points, one can use a `Flag` to represent whether the serialization is the point at infinity, or whether the `y` coordinate is positive or not. These bits will be appended to the end of the point’s serialization, or included in a new byte, depending on space available."],["Read","The `Read` trait allows for reading bytes from a source."],["Write","A trait for objects which are byte-oriented sinks."]]};