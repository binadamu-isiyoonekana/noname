(function() {var implementors = {};
implementors["blake2"] = [{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"blake2/struct.Blake2bVarCore.html\" title=\"struct blake2::Blake2bVarCore\">Blake2bVarCore</a>","synthetic":false,"types":["blake2::Blake2bVarCore"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sVarCore.html\" title=\"struct blake2::Blake2sVarCore\">Blake2sVarCore</a>","synthetic":false,"types":["blake2::Blake2sVarCore"]}];
implementors["digest"] = [{"text":"impl&lt;T, OutSize&gt; <a class=\"trait\" href=\"digest/core_api/trait.AlgorithmName.html\" title=\"trait digest::core_api::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"digest/core_api/struct.CtVariableCoreWrapper.html\" title=\"struct digest::core_api::CtVariableCoreWrapper\">CtVariableCoreWrapper</a>&lt;T, OutSize&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"digest/core_api/trait.VariableOutputCore.html\" title=\"trait digest::core_api::VariableOutputCore\">VariableOutputCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.AlgorithmName.html\" title=\"trait digest::core_api::AlgorithmName\">AlgorithmName</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;T::<a class=\"associatedtype\" href=\"digest/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type digest::OutputSizeUser::OutputSize\">OutputSize</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, T::<a class=\"associatedtype\" href=\"digest/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type digest::OutputSizeUser::OutputSize\">OutputSize</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["digest::core_api::ct_variable::CtVariableCoreWrapper"]}];
implementors["sha2"] = [{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha2/struct.Sha256VarCore.html\" title=\"struct sha2::Sha256VarCore\">Sha256VarCore</a>","synthetic":false,"types":["sha2::core_api::Sha256VarCore"]},{"text":"impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha2/struct.Sha512VarCore.html\" title=\"struct sha2::Sha512VarCore\">Sha512VarCore</a>","synthetic":false,"types":["sha2::core_api::Sha512VarCore"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()