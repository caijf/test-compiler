// 查找非 ASCII 数字以将其转换为 ASCII 数字的代码：
const reg1 = /[\p{Decimal_Number}--[0-9]]/v;

// 查找特定脚本的“单词/标识符字母”的跨度：
const reg2 = /[\p{Script=Khmer}&&[\p{Letter}\p{Mark}\p{Number}]]/v;

// 寻找“突破空间”：
// const reg3 = /[\p{White_Space}--\p{Line_Break=Glue}]/v;
// 请注意，ECMAScript 目前不支持 \p{Line_Break=…} — 无论如何，这是一个说明性示例。

// 寻找除 ASCII 字符之外的表情符号字符：
const reg4 = /[\p{Emoji}--[#*0-9]]/v;
// or
const reg5 = /[\p{Emoji}--\p{ASCII}]/v;

// 查找非特定于脚本的组合标记：
const reg6 = /[\p{Nonspacing_Mark}&&[\p{Script=Inherited}\p{Script=Common}]]/v;

// 查找除 ASCII 空格之外的“不可见字符”：
// const reg7 = /[[\p{Other}\p{Separator}\p{White_Space}\p{Default_Ignorable_Code_Point}]--\x20]/v;
// 请注意，ECMAScript 目前不支持 \p{NFC_Quick_Check=…} — 无论如何，这是一个说明性示例。

// 所有希腊语代码点，可以是字母、标记（例如变音符号）或十进制数：
const reg8 = /[\p{Script_Extensions=Greek}&&[\p{Letter}\p{Decimal_Number}]]/v;

// 所有代码点，除了“其他” General_Category 中的代码点，但添加回控制字符：
const reg9 = /[[\p{Any}--\p{Other}]\p{Control}]/v;

// 所有分配的码位，分隔符除外：
const reg10 = /[\p{Assigned}--\p{Separator}]/v;

// 所有从右到左和阿拉伯字母代码点，但删除未分配的代码点：
// const reg11 = /[[\p{Bidi_Class=R}\p{Bidi_Class=AL}]--\p{Unassigned}]/v;
// 请注意，ECMAScript 目前不支持 \p{Bidi_Class=…} — 无论如何，这是一个说明性示例。

// 所有从右到左和阿拉伯字母代码点都带有 General_Category “字母”：
// const reg12 = /[\p{Letter}&&[\p{Bidi_Class=R}\p{Bidi_Class=AL}]]/v;
// 请注意，ECMAScript 目前不支持 \p{Bidi_Class=…} — 无论如何，这是一个说明性示例。

// “其他” General_Category 中的所有字符，格式和控制字符除外（或等效地，所有代理项、私人使用和未分配的代码点）：
const reg13 = /[\p{Other}--\p{Format}--\p{Control}]/v;

export {};
