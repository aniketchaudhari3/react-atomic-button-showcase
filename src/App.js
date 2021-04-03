import React from "react";
import "./style.css";
import Button from "react-atomic-button";

export default function App() {
  return (
    <div>
      <h3>Primary Buttons</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="sm">
          Small button
        </Button>
        <Button className="btn" size="md">
          Medium button
        </Button>
        <Button className="btn" size="lg">
          large button
        </Button>
        <Button className="btn" size="lg" disabled type="primary">
          disabled
        </Button>
      </div>

      <h3>Secondary Buttons</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="sm" type="secondary">
          Small button
        </Button>
        <Button className="btn" size="md" type="secondary">
          Medium button
        </Button>
        <Button className="btn" size="lg" type="secondary">
          large button
        </Button>
        <Button className="btn" size="lg" disabled type="secondary">
          disabled
        </Button>
      </div>

      <h3>Ghost Buttons</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="sm" type="ghost">
          Small button
        </Button>
        <Button className="btn" size="md" type="ghost">
          Medium button
        </Button>
        <Button className="btn" size="lg" type="ghost">
          large button
        </Button>
        <Button className="btn" size="lg" type="ghost" disabled>
          disabled
        </Button>
      </div>

      <h3>Danger Buttons</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="sm" type="danger">
          Small button
        </Button>
        <Button className="btn" size="md" type="danger">
          Medium button
        </Button>
        <Button className="btn" size="lg" type="danger">
          large button
        </Button>
        <Button className="btn" size="lg" disabled type="danger">
          disabled
        </Button>
      </div>

      <h3>Dark Mode Buttons</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="sm" type="dark">
          Small button
        </Button>
        <Button className="btn" size="md" type="dark">
          Medium button
        </Button>
        <Button className="btn" size="lg" type="dark">
          large button
        </Button>
        <Button className="btn" size="lg" disabled type="dark">
          disabled
        </Button>
      </div>

      <h3>Icon Buttons Large Custom Styles (Background and Text color)</h3>
      <div style={{ margin: "30px" }}>
        <Button
          className="btn"
          size="lg"
          style={{ background: "#dedede", color: "#000" }}
          icon="google"
        >
          Sign in with Google
        </Button>
        <Button
          className="btn"
          size="lg"
          style={{ background: "#dedede", color: "#000" }}
          icon="facebook"
        >
          Sign in with Facebook
        </Button>
        <Button
          className="btn"
          size="lg"
          style={{ background: "#dedede", color: "#000" }}
          icon="microsoft"
        >
          Sign in with Microsoft
        </Button>
        <Button
          className="btn"
          size="lg"
          style={{ background: "#dedede", color: "#000" }}
          icon="instagram"
        >
          Sign in with Instagram
        </Button>
        <Button
          className="btn"
          size="lg"
          style={{ background: "#dedede", color: "#000" }}
          icon="github"
        >
          Sign in with Github
        </Button>
      </div>

      <h3>Icon Buttons Large</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="lg" type="primary" icon="google">
          Sign in with Google
        </Button>
        <Button className="btn" size="lg" type="primary" icon="facebook">
          Sign in with Facebook
        </Button>
        <Button className="btn" size="lg" type="primary" icon="microsoft">
          Sign in with Microsoft
        </Button>
        <Button className="btn" size="lg" type="primary" icon="instagram">
          Sign in with Instagram
        </Button>
        <Button className="btn" size="lg" type="primary" icon="github">
          Sign in with Github
        </Button>
      </div>

      <h3>Icon Buttons Medium</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="md" type="secondary" icon="google">
          Sign in with Google
        </Button>
        <Button className="btn" size="md" type="secondary" icon="facebook">
          Sign in with Facebook
        </Button>
        <Button className="btn" size="md" type="secondary" icon="microsoft">
          Sign in with Microsoft
        </Button>
        <Button className="btn" size="md" type="secondary" icon="instagram">
          Sign in with Instagram
        </Button>
        <Button className="btn" size="md" type="secondary" icon="github">
          Sign in with Github
        </Button>
      </div>

      <h3>Icon Buttons Medium (Right Aligned)</h3>
      <div style={{ margin: "30px" }}>
        <Button
          className="btn"
          size="md"
          type="secondary"
          alignIcon="right"
          icon="google"
        >
          Sign in with Google
        </Button>
        <Button
          className="btn"
          size="md"
          type="secondary"
          alignIcon="right"
          icon="facebook"
        >
          Sign in with Facebook
        </Button>
        <Button
          className="btn"
          size="md"
          type="secondary"
          alignIcon="right"
          icon="microsoft"
        >
          Sign in with Microsoft
        </Button>
        <Button
          className="btn"
          size="md"
          type="secondary"
          alignIcon="right"
          icon="instagram"
        >
          Sign in with Instagram
        </Button>
        <Button
          className="btn"
          size="md"
          type="secondary"
          alignIcon="right"
          icon="github"
        >
          Sign in with Github
        </Button>
      </div>

      <h3>Icon Buttons Small (Right aligned)</h3>
      <div style={{ margin: "30px" }}>
        <Button
          className="btn"
          size="sm"
          type="ghost"
          alignIcon="right"
          icon="google"
        >
          Sign in with Google
        </Button>
        <Button
          className="btn"
          size="sm"
          type="ghost"
          alignIcon="right"
          icon="facebook"
        >
          Sign in with Facebook
        </Button>
        <Button
          className="btn"
          size="sm"
          type="ghost"
          alignIcon="right"
          icon="microsoft"
        >
          Sign in with Microsoft
        </Button>
        <Button
          className="btn"
          size="sm"
          type="ghost"
          alignIcon="right"
          icon="instagram"
        >
          Sign in with Instagram
        </Button>
        <Button
          className="btn"
          size="sm"
          type="ghost"
          alignIcon="right"
          icon="github"
        >
          Sign in with Github
        </Button>
      </div>

      <h3>Icons Button Disabled (Default left aligned)</h3>
      <div style={{ margin: "30px" }}>
        <Button className="btn" size="sm" disabled type="ghost" icon="google">
          Sign in with Google
        </Button>
        <Button className="btn" size="sm" disabled type="ghost" icon="facebook">
          Sign in with Facebook
        </Button>
        <Button
          className="btn"
          size="sm"
          disabled
          type="ghost"
          icon="microsoft"
        >
          Sign in with Microsoft
        </Button>
        <Button
          className="btn"
          size="sm"
          disabled
          type="ghost"
          icon="instagram"
        >
          Sign in with Instagram
        </Button>
        <Button className="btn" size="sm" disabled type="ghost" icon="github">
          Sign in with Github
        </Button>
      </div>
    </div>
  );
}
