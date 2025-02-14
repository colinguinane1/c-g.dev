import CImage from "./components/c-image";
import ImageExample from "./components/c-image-example";
import ImageCacheExample from "./components/c-image-examples/c-image-cache-example";
import ImageChildrenExample from "./components/c-image-examples/c-image-children-example";
import ImageDropdownExample from "./components/c-image-examples/c-image-dropdown-example";
import ImageSpinnerExample from "./components/c-image-examples/c-image-loading-example";
import ImageSkeletonExample from "./components/c-image-examples/c-image-skeleton-example";
import Code from "./components/mdx/custom-code";
import FileName from "./components/mdx/filename";
import Viewport from "./components/mdx/viewport";
import ResponsiveModal from "./components/modal-example";
import StackCard from "./components/stack-card";
import StackCardExample from "./components/stack-card-example";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import type { MDXComponents } from "mdx/types";
import { GoArrowUpRight } from "react-icons/go";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ImageExample: (props) => <ImageExample {...props} />,
    ImageSpinnerExample: (props) => <ImageSpinnerExample {...props} />,
    ImageSkeletonExample: (props) => <ImageSkeletonExample {...props} />,
    ImageCacheExample: (props) => <ImageCacheExample {...props} />,
    ImageDropdownExample: (props) => <ImageDropdownExample {...props} />,
    ImageChildrenExample: (props) => <ImageChildrenExample {...props} />,
    CImage: (props) => <CImage {...props} />,
    ResponsiveModal: (props) => <ResponsiveModal {...props} />,
    Tabs: (props) => <Tabs {...props} />,
    TabsList: (props) => <TabsList {...props} />,
    TabsTrigger: (props) => <TabsTrigger {...props} />,
    TabsContent: (props) => <TabsContent {...props} />,
    StackCard: (props) => <StackCard {...props} />,
    StackCardExample: (props) => <StackCardExample {...props} />,
    ...components,
    Alert: (props) => <Alert {...props} />,
    AlertTitle: (props) => <AlertTitle {...props} />,
    AlertDescription: (props) => <AlertDescription {...props} />,
    FileName: (props) => <FileName {...props} />,
    Viewport: (props) => <Viewport {...props} />,
    h1: (props) => (
      <h1
        className="text-4xl py-4 font-black text-secondary-foreground "
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-3xl py-4 font-bold text-secondary-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-2xl py-4 font-semibold text-secondary-foreground"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-xl py-4 font-medium text-secondary-foreground"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="text-lg py-4 font-normal text-secondary-foreground"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="text-base py-4  font-light text-secondary-foreground"
        {...props}
      />
    ),
    table: (props) => (
      <div className="w-full overflow-x-auto">
        <table
          className="w-full min-w-max border rounded-lg overflow-hidden text-left text-sm"
          {...props}
        />
      </div>
    ),
    thead: (props) => <thead className=" font-semibold" {...props} />,
    th: (props) => <th className="border bg-card  p-2 " {...props} />,
    td: (props) => <td className="border  p-2 text-wrap max-w-20" {...props} />,
    tbody: (props) => <tbody className="divide-y  " {...props} />,
    p: (props) => <p className="mb-b py-4" {...props} />,
    li: (props) => <li className=" py-2" {...props} />,
    ul: (props) => <ul className="list-disc pl-6" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6" {...props} />,
    hr: (props) => <hr className="mt-4 pb-4" {...props} />,
    blockquote: (props) => (
      <blockquote
        style={{ paddingBottom: 0 }}
        className="border-l-4 pl-2"
        {...props}
      />
    ),
    pre: (props) => <Code {...props} />,
    a: (props) => (
      <span className="inline-flex items-center text-blue-500">
        <a target="__blank" className="" {...props} />
        <GoArrowUpRight size={12} />
      </span>
    ),
  };
}
