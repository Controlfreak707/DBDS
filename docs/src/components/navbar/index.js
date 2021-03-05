import { h } from "preact";
const halfmoon = require("halfmoon");
import { Link } from "preact-router/match";

/*<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>*/

const Header = () => (
  <nav class="navbar">
    <div class="navbar-content">
      <button
        class="btn btn-action"
        type="button"
        onclick={() => halfmoon.toggleSidebar()}
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
        <span class="sr-only">Toggle sidebar</span>
      </button>
    </div>
  </nav>
);

export default Header;
