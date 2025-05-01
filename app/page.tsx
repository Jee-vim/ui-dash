import CButton from "@/components/shared/c-button";

export default function Page() {
  return (
    <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center gap-4 h-dvh animate-fade-in">
      <h1 className="text-40">UI Dash</h1>
      <p className="text-20">Just a simple dashboard ui for your starter:)</p>
      <div className="flex gap-4 items-center pt-5">
        <CButton title="See Example" href="/v1" />
        <CButton
          title="View Github"
          href="https://github.com/zedd-dev/ui-dash"
          newWindow
        />
      </div>
    </div>
  );
}
