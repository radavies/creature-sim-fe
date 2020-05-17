import React, { Component } from 'react';
import md5 from 'md5';

class CreatureAvatar extends Component {
  constructor(props) {
    super(props);
    const { showAvatar, creatureName, creatorName } = props;

    this.state = {
      creatureName: creatureName,
      creatorName: creatorName,
      showAvatar: showAvatar,
    };
  }

  static getDerivedStateFromProps({ showAvatar, creatureName, creatorName }) {
    return { showAvatar, creatureName, creatorName };
  }

  shouldComponentUpdate(nextProps) {
    const { updateAvatar } = nextProps;
    return updateAvatar;
  }

  updateAvatar(creatureName, creatorName) {
    const avatarString = (
      creatureName.trim() + creatorName.trim()
    ).toLowerCase();
    return md5(avatarString);
  }

  render() {
    const { showAvatar, creatureName, creatorName } = this.state;
    let avatar = null;
    if (showAvatar) {
      const avatarHash = this.updateAvatar(creatureName, creatorName);
      avatar = (
        <img
          alt={creatureName}
          src={`https://www.gravatar.com/avatar/${avatarHash}?d=monsterid&s=150`}
          className="avatar-form-item"
        />
      );
    }

    return avatar;
  }
}
export default CreatureAvatar;
