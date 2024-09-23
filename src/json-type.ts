// create custom JSON type
type PrimitiveValues = boolean | number | string | null;
type JSONObject = {
  [key: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = PrimitiveValues | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}
isJSON("hello");
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: "hello" });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, "foo"] } });

// @ts-expect-error
isJSON(() => "");
// @ts-expect-error
isJSON(class {});
// @ts-expect-error
isJSON(undefined);
// @ts-expect-error
isJSON(BigInt(143));
// @ts-expect-error
isJSON(isJSON);
