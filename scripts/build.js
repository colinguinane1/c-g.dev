"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Define the components and their dependencies that should be registered
var components = [
    {
        name: "component",
        path: path.join(__dirname, "./registry/ui/stack-card.tsx"),
        registryDependencies: ["button", "input"],
        dependencies: ["lucide-react"],
        cssVars: {
            light: {},
            dark: {},
        },
        tailwind: {
            config: {
                theme: {
                    extend: {
                        colors: {},
                    },
                },
            },
        },
    },
];
// Create the registry directory if it doesn't exist
var registry = path.join(__dirname, "../public");
if (!fs.existsSync(registry)) {
    fs.mkdirSync(registry);
}
// Create the registry files
for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
    var component = components_1[_i];
    var content = fs.readFileSync(component.path, "utf8");
    var schema = {
        name: component.name,
        type: "registry:ui",
        registryDependencies: component.registryDependencies || [],
        dependencies: component.dependencies || [],
        devDependencies: component.devDependencies || [],
        tailwind: component.tailwind || {},
        cssVars: component.cssVars || {
            light: {},
            dark: {},
        },
        files: [
            {
                path: "".concat(component.name, ".tsx"),
                content: content,
                type: "registry:ui",
            },
        ],
    };
    fs.writeFileSync(path.join(registry, "".concat(component.name, ".json")), JSON.stringify(schema, null, 2));
}
